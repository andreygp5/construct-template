function scroll_to_header(){
    let offset = document.getElementsByClassName("header")[0].getBoundingClientRect().top
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
      })
}
