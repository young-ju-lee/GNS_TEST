import { defineStore } from 'pinia'
import type { NavMenu } from '@/types/api';

export const useNavStore = defineStore('nav', {
  state: () => ({
      path: [] as NavMenu[],
      title: "" as string,
      description: "" as string,
  }),
  actions: {
    setCurrentPath(menu: NavMenu, menuIdx: number, depth: number) {
        // initialize path
        this.path = [];
        if(menu && depth >= 1) {
            let pathData1 = {
                title: menu.title,
                link: menu.link,
                intro: menu.intro,
                show: false,
                subMenu: [],
            }
            this.path.push(pathData1)
            this.title = menu.title
            if(menu.intro){
              this.description = this.highlightTitleInDescription(menu.title, menu.intro);
            }
        }
        if(menu && depth >= 2) {
            let pathData2 = {
                title: menu.subMenu[menuIdx].title,
                link: menu.subMenu[menuIdx].link,
                intro: menu.subMenu[menuIdx].intro,
                show: false,
                subMenu: []
            }
            this.path.push(pathData2)
            this.title = menu.subMenu[menuIdx].title
            if(menu.subMenu[menuIdx].intro){
              this.description = this.highlightTitleInDescription(menu.subMenu[menuIdx].title, menu.subMenu[menuIdx].intro);
            }
        }
        if(menu && depth >= 3) {
          let pathData3 = {
              title: menu.subMenu[menuIdx].title,
              link: menu.subMenu[menuIdx].link,
              intro: menu.subMenu[menuIdx].intro,
              show: false,
              subMenu: []
          }
          this.path.push(pathData3)
          this.title = menu.title
          if(menu.intro){
            this.description = this.highlightTitleInDescription(menu.title, menu.intro);
          }
      }
        
    },
    highlightTitleInDescription(title: string, description: string) {
        const regex = new RegExp(`(${title})`, 'g');
        return description.replace(regex, '<span>$1</span>');
    }
  },
  persist: true
})