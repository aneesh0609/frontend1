import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel repellendus aperiam obcaecati blanditiis incidunt et hic, reiciendis repellat, unde quo pariatur architecto iusto delectus repudiandae temporibus omnis aspernatur animi, eum excepturi? Laudantium, facere iste neque eius animi voluptatibus fugit assumenda ullam, voluptatum asperiores, modi ipsa hic amet labore eveniet!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga explicabo temporibus quasi asperiores quaerat molestias amet, dolore voluptatum quibusdam! Voluptatibus, quis nemo maxime eos obcaecati id, quia similique ab nihil, tempore cupiditate optio suscipit eaque!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, sed.</p>
       <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  )
}

export default Biography