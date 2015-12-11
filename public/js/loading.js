var webComponentLoading = function (){
    //this.started = false;
    var loading = 0;
    var loaded = 0;
    this.elementInit = function(){
        loading += 1;
    };
    this.elementAttached = function(){
        loaded += 1;
        updateLoadingBar()

    };
    this.updateLoadingBar = function(){
        NProgress.set(loaded/loading);
        if (loading == loaded){
            NProgress.done();
            setTimeout(function(){},300);
            webApp.visibility = "inherit";
        }
    };
    return this
}();
