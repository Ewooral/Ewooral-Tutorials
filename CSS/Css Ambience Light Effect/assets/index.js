// import './index.css'
function Section (){
    return (`
      <section class="cube">
        <article class="top">
        Designed by Palm Tree, Soft.
            github.com/ewooral
        </article>
        <article>
            <figure  style="--i:0;"></figure>
            <figure  style="--i:1;"> Designed by Palm Tree, Soft.</figure>
            <figure  style="--i:2;"></figure>
            <figure  style="--i:3;"></figure>
        </article>
    </section> 
    `
    )
      
    
}

body.innerHTML=Section()
console.log(Section())