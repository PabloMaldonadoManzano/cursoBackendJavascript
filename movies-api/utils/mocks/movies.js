const moviesMock = [
    {"id":"742ba822-855d-46ed-ab43-b2cec9189748","title":"Métastases","year":2000,"cover":"http://dummyimage.com/238x179.bmp/ff4444/ffffff","description":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","duration":1979,"contentRating":"R","source":"https://army.mil/hendrerit/at.aspx",tags:["Comedy"]},
{"id":"6064ce0e-8a11-470d-88bb-fba7a0ee07a1","title":"Strapped","year":1993,"cover":"http://dummyimage.com/166x168.bmp/ff4444/ffffff","description":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","duration":2022,"contentRating":"R","source":"https://vinaora.com/nulla/integer.json",tags:["Action","Drama"]},
{"id":"aef0e905-6260-487a-b95e-8c193855d051","title":"Coast of Death","year":2000,"cover":"http://dummyimage.com/112x102.jpg/ff4444/ffffff","description":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","duration":1929,"contentRating":"PG-13","source":"https://acquirethisname.com/ac/est/lacinia.jsp",tags:["Children|Documentary","Drama"]},
{"id":"b621381b-4db3-4f32-a0f4-39fe0a2d0c4c","title":"Fly II, The","year":2011,"cover":"http://dummyimage.com/156x249.jpg/dddddd/000000","description":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.","duration":2044,"contentRating":"NC-17","source":"http://clickbank.net/commodo/placerat/praesent/blandit.png",tags:["Horror|Sci-Fi"]},
{"id":"474b7096-6931-4c1a-8d0a-b17598c493a6","title":"Last Legion, The","year":1997,"cover":"http://dummyimage.com/156x241.bmp/dddddd/000000","description":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","duration":1928,"contentRating":"NC-17","source":"https://bbb.org/ut/nunc.aspx",tags:["Action","Adventure","Fantasy","War"]},
{"id":"01106aeb-6b27-42cb-80cd-9876e0c0d33f","title":"Promise Me This (Zavet)","year":1997,"cover":"http://dummyimage.com/213x117.jpg/cc0000/ffffff","description":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.","duration":2007,"contentRating":"NC-17","source":"https://squarespace.com/eros/elementum/pellentesque/quisque.html",tags:["Comedy"]},
{"id":"a26d820c-8fd1-498b-9f85-2ed22f6c7ffb","title":"Merry Widow, The","year":2012,"cover":"http://dummyimage.com/190x219.bmp/5fa2dd/ffffff","description":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.","duration":2035,"contentRating":"PG","source":"http://chicagotribune.com/sapien.js",tags:["Drama","Romance"]},
{"id":"87cee81f-e29b-4c22-94dd-f14ebda62daf","title":"Quiet Earth, The","year":2007,"cover":"http://dummyimage.com/144x175.bmp/cc0000/ffffff","description":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.","duration":2046,"contentRating":"G","source":"https://nih.gov/arcu/sed/augue/aliquam/erat/volutpat.jsp",tags:["Drama","Mystery|Sci-Fi"]},
{"id":"6070640f-a631-4693-af22-2c2a708a2c23","title":"Robe, The","year":2007,"cover":"http://dummyimage.com/124x145.png/ff4444/ffffff","description":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","duration":2022,"contentRating":"PG","source":"http://shutterfly.com/nunc/purus/phasellus/in/felis/donec/semper.aspx",tags:["Drama"]},
{"id":"775aa084-b503-4b87-b6b5-2888ac21ab07","title":"Way I Spent the End of the World, The (Cum mi-am petrecut sfarsitul lumii)","year":1999,"cover":"http://dummyimage.com/195x227.bmp/cc0000/ffffff","description":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.","duration":2023,"contentRating":"G","source":"https://cbsnews.com/ultrices/posuere/cubilia/curae.aspx",tags:["Drama"]}
]

function filteredMoviesMocks(tag){
    return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {

    async getMovies(){
        return Promise.resolve(moviesMock)
    }

    async createMovie(){
        return Promise.resolve(moviesMock[0])
    }

}

module.exports= {
    moviesMock,
    MoviesServiceMock,
    filteredMoviesMocks
}