import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1615956227970-73c634f457ae?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      about: 'Customers who actively use digital banking services and have their financial needs met efficiently.',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661583926314-8c2cf8ee9f57?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      about: 'Customers with limited access to suitable banking products or incomplete financial services.',
      tag: 'Undeserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1721871762391-f685a92cc8fd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      about: 'Individuals without access to formal banking systems, relying on alternative financial methods.',
      tag: 'Unbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1608768495475-94ab57c46c65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      about: 'First-time users exploring digital banking services and basic financial products.',
      tag: 'Newbie'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1664478061318-cffba2f88f84?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      about: 'Customers showing low engagement or signs of dropping off from digital banking usage.',
      tag: 'At-Risk'
    },
    {
      img: 'https://images.unsplash.com/photo-1605818215588-c8013661b021?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      about: 'Prospects with strong engagement indicators and high likelihood of conversion.',
      tag: 'Promising'
    }
    
  ]

  return (
    <div>
      <Section1 users = {users} />
      <Section2 />
    </div>
  )
}

export default App
