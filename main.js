var images = [
    "https://i.postimg.cc/FsQ1Ws8M/Beauty-Plus-20191028003446514-save.jpg",
    "https://i.postimg.cc/KvVqxtsw/20200311-202007.jpg",
    "https://i.postimg.cc/t70xmR2S/MAA-PASSPORT-LATEST.jpg",
    "https://i.postimg.cc/N0P7ktqV/20201001-135630.jpg",
    "https://i.postimg.cc/c1Przcrd/Beauty-Plus-20200129222642120-save.jpg",
    "https://i.postimg.cc/KctBRBzC/20191119-205909.jpg"
  ];
   
  var names =  [
   "Somnath Chakraborty",
   "Eleena  Chakrborty" ,
   "Manisha Chakraborty",
   "Daanya Chakraborty",
   "Dasha Chakraborty",
   "MY CHAKRABORTY FAMILY"
  ];

  var i = 0;
  function nextslide() {
    document.getElementById('book_image'). src= images[i]
    document.getElementById('names'). innerHTML= names[i]
    i++;
  }

