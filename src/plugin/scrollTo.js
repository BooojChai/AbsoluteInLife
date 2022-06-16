export default{
    install(Vue){
        var isScrolling = false
        var timer

        Vue.prototype.$scrollTo = function(end = 0, cb) {
            if (!isScrolling) {
                isScrolling = true
                timer = setInterval(() => {
                    document.documentElement.scrollTop -= (document.documentElement.scrollTop - end) / 16.7
                    if (document.documentElement.scrollTop <= end) {
                        clearInterval(timer)
                        isScrolling = false
                        cb? cb() : null
                    }
                }, 16.7);
            }
        }

        Vue.prototype.$cancelScroll = function() {
            if (isScrolling) {
                clearInterval(timer)
            }
        }
    }
}