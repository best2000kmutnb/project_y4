import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            obj_lis: [
                {
                  id: "i1",
                  name: "dog",
                  desc: "yum.",
                  img: "https://p.kindpng.com/picc/s/128-1284036_shiba-inu-doge-youtube-shiba-inu-dodge-dog.png"
                },
                {
                  id: "i2",
                  name: "cat",
                  desc: "cute.",
                  img: "https://pbs.twimg.com/profile_images/1430763145459499009/uzHsh9oB_400x400.jpg"
                }
              ],
        };
    },
    getters: {
        obj_lis_info(state) {
            return state.obj_lis;
        },
        obj_in_lis(state) {
            return(memoryId) => {
                return state.obj_lis.find((i) => i.id === memoryId);
            };
        }
    }
});

export default store;
