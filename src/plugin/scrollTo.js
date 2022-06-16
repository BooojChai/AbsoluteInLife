export default{
    install(Vue){
        Vue.prototype.$scrollTo = function(end = 0,cb){
            var timer = setInterval(() => {
                document.documentElement.scrollTop -= (document.documentElement.scrollTop - end) / 16.7;
                if (document.documentElement.scrollTop <= end) {
                    clearInterval(timer);
                    cb? cb() : null
                }
            }, 16.7);
        }
    }
}