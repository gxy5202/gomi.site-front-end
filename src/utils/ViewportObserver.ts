/*
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-04-27 00:07:36
 */
export default {
    init: (items: NodeList) => {
        const intersectionObserver = new IntersectionObserver(function (entries) {
            if (entries[0].intersectionRatio <= 0) return;

            const { name } = entries[0].target.dataset as DOMStringMap;
            (document.querySelector(`[data-name='${name}']`) as HTMLElement).classList.add('ob-active');
        });

        items.forEach((item) => {
            // start observing
            intersectionObserver.observe(item as HTMLElement);
        });
    }
}
