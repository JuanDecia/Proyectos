let links = document.querySelectorAll(".close");

links.forEach(link => {

    link.addEventListener("click", function(event){
        event.preventDefault();
        let content = document.querySelector('.content');

        setTimeout(function(){
            location.href = '/';
        },600);

        return false
    });
});