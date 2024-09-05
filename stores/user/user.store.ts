import { defineStore } from 'pinia';
import { ApiService } from '@/service/api.service';

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    token: null,
  }),
  getters: {
    isUserAuthenticated: (state) => state.isAuthenticated,
  },
  actions: {
    async login(memId: string, memPwd: string): Promise<string | null> {
        const params = new URLSearchParams(window.location.search);
        const redirectTo = params.get('redirectTo');
        await ApiService.Instance.post(
            '/user/login',
            { // 객체 형태로 요청 본문 데이터 전달
              memId,
              memPwd
            },
            { 
              headers: {
                'Content-Type': 'application/json', // JSON 타입의 컨텐트 타입 헤더를 유지
              },
              notNeedAuth: true
            }
        );
  
        return redirectTo ? decodeURIComponent(redirectTo) : null;
    },
  },
});