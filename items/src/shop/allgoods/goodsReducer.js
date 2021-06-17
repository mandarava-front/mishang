import $ from 'jquery'
export function goods(
    state = {
        goods: [
            { 全部: [] },
            { "觅尚·良茶": ["全部", "滇红", "白茶"] },
            { "觅尚·精选": ["全部", "有机普洱", "有机白茶"] },
            { "觅尚·茶具": ["全部", "茶水分离"] },
            { "觅尚·养生": ["全部", "觅尚保健茶"] },
            { 线下门店: ["全部", "精美茶具", "优质好茶"] },
        ],
        goodsinfo: [],
        carContent: [],
        addQueue: { queue: null, num: 0 }
    },
    action) {
    // console.log(goodsinfo())
    switch (action.type) {
        case "catalogues":
            return state;

        case "addGoodsNum":
            state.addQueue.num = state.addQueue.num + 1
            return state
        case "subGoodsNum":
            if (state.addQueue.num > 0) {
                state.addQueue.num = state.addQueue.num - 1
            }
            return state
        case "addqueue":
            state.goodsinfo.map((v, i) => {
                if (v.id === action.id) {
                    state.addQueue.queue = v
                    state.addQueue.num = 1
                }
            })
            return state
        case "add":
            // if (state.carContent.length === 0) {
            state.carContent.push(state.addQueue)
                // } else {
                //     state.carContent.map((v, i) => {
                //         // console.log()
                //         if (v.queue.id != action.addid) {
                //             console.log(state.carContent)
                //             console.log(state.addQueue.queue)
                //             state.carContent.push(state.addQueue)
                //         }
                //     })
                // }
                // state.carContent.push(state.addQueue)

            console.log(state.carContent)

            return state
        default:
            $.ajax({
                url: "https://www.fastmock.site/mock/3cdd55d1c8a198852fbbcf8657d96bc0/tea/goods",
                type: "POST",
                dataType: "json",
                async: false,
                success: function(data) {
                    var da = data.data
                    state.goodsinfo = da

                    state.carContent = [{ queue: da[0], num: 1 }]
                    return state
                }
            })
            return state;
    }
}
export function catalogue() {
    return { type: "catalogues" }
}

export function caradd() {
    return {
        type: "addGoodsNum"
    }
}
export function carsub() {
    return {
        type: "subGoodsNum"

    }
}
export function addq(n) {
    return {
        type: "addqueue",
        id: n
    }
}
export function ad(n) {
    console.log(n)
    return {
        type: "add",
        addid: n

    }
}