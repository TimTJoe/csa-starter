import React from 'react';

const Sidebar = React.memo(() => {
  return (
    <aside className='sidebar'>
      <div>this is a div</div>
      <h1>Sidebar</h1>
    </aside>
    )
})

export default Sidebar