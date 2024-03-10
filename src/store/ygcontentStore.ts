import {create} from 'zustand';
import {YGContentAction, YGContentItem, YGContentState} from './type';
import {getItem, setItem} from '@/utils/asyncStorage';
import {generateUUid} from '@/utils';
import {YG_CONTENT} from '@/utils/const';

export const useYgContentStore = create<YGContentState & YGContentAction>(
  set => ({
    ygContentList: [],
    saveYgContent: async (data: YGContentItem) => {
      console.log('saveYgContent_data', data);
      data.id = generateUUid();
      let list: YGContentItem[] = useYgContentStore.getState().ygContentList;

      if (list && list.length > 0) {
        list.push(data);
      } else {
        list = [];
        list.push(data);
      }

      data.date = Date.now();
      await setItem(YG_CONTENT, list);

      set(() => ({
        ygContentList: list,
      }));
    },
    updateYgContent: async (data: YGContentItem) => {
      const list: YGContentItem[] = useYgContentStore.getState().ygContentList;
      if (list && list.length > 0) {
        list.map(item => {
          if (item.id === data.id) {
            data.date = Date.now();
            Object.assign(item, data);
          }
        });
      }
      await setItem(YG_CONTENT, list);
      set(() => ({ygContentList: list}));
    },
    removeYgContent: async (id: string) => {
      const list: YGContentItem[] = useYgContentStore.getState().ygContentList;
      if (list && list.length > 0) {
        list.map((item, index) => {
          if (item.id === id) {
            list.splice(index, 1);
          }
        });
      }
      await setItem(YG_CONTENT, list);
      set(() => ({ygContentList: list}));
    },
    getYgContent: async () => {
      const list: YGContentItem[] = await getItem(YG_CONTENT);
      // console.log('getYgContent', list);
      const newArr = list.map(item => {
        item.isTruncated = true;
        return item;
      });
      set(() => ({ygContentList: newArr}));
      return list;
    },
  }),
);
