export { switchLi }

function switchLi(lis, urlItem, elems) {
    lis.forEach(li => {
        li.classList.remove('uk-active');
    })
    lis[elems[urlItem]].classList.add('uk-active');
}
