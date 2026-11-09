/*
1. first check if the click was on mobile approch only.

2. when clicked each heading of footer, apply the slide toggle.

3. Again when clicked each h3, change the Plus (+) icon to (X).
*/

// -------------------------------------------

$("h3").on("click", function () {
    // checking the clicking was on mobile
    if ($(window).width() <= 768) {

        // selecting each footer heading 
        let eachFooter = $(this).next();
        // console.log(eachFooter);

        // applying the slide toggle for each footer heading  
        eachFooter.slideToggle()

        // changing the (+) icon to (X)
        $(this).toggleClass("expanded");
    }
})
