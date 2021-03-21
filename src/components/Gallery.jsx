import React from 'react'
import { posts } from '../data'

const Gallery = () => {
  const galleryItems = posts.map(post => (
    <div className="item" key={post.id} tabIndex={8}>
      <img src={post.imageUrl} alt="" />
    </div>
  ))

  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label form="addPhotoInput">
        <i className="add-photo fas fa-plus-square" />
      </label>
      <div className="gallery-nav" />
      <section className="gallery">
        {galleryItems}
      </section>
    </>
  )
}

export default Gallery
