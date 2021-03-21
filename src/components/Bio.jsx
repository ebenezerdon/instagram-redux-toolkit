import React from 'react'

const Bio = () => {
    return (
      <section className="bio">
        <div className="profile-photo">
          <img src="https://images.pexels.com/photos/1727280/pexels-photo-1727280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile" />
        </div>
        <div className="profile-info">
            <p className="name">Jane Butters</p>
            <button>follow</button>
        </div>
      </section>
    )
}

export default Bio
