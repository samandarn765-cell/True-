import React, { useState } from 'react'
import AlertModal from '../components/AlertModal'
import './Poduct.css'

const categories = ['Все', 'Беговые дорожки', 'Велотренажёры', 'Эллипсоиды', 'Силовые']

const products = [
  { cat: 'Беговые дорожки', name: 'TRUE 900 Treadmill', desc: 'Профессиональная беговая дорожка', icon: '🏃', price: 'от $8,500' },
  { cat: 'Беговые дорожки', name: 'TRUE PS300 Treadmill', desc: 'Коммерческая беговая дорожка', icon: '🏃', price: 'от $6,200' },
  { cat: 'Велотренажёры', name: 'TRUE ES700 Bike', desc: 'Эргономичный велотренажёр', icon: '🚴', price: 'от $4,500' },
  { cat: 'Велотренажёры', name: 'TRUE CS400 Recumbent', desc: 'Горизонтальный велотренажёр', icon: '🚴', price: 'от $3,800' },
  { cat: 'Эллипсоиды', name: 'TRUE Traverse', desc: 'Эллиптический тренажёр', icon: '🔄', price: 'от $7,000' },
  { cat: 'Эллипсоиды', name: 'TRUE Transcend', desc: 'Профессиональный эллипсоид', icon: '🔄', price: 'от $5,500' },
  { cat: 'Силовые', name: 'TRUE Functional Trainer', desc: 'Функциональный тренажёр', icon: '💪', price: 'от $9,000' },
  { cat: 'Силовые', name: 'TRUE Racks System', desc: 'Стойки для свободных весов', icon: '🏋️', price: 'от $3,200' },
  { cat: 'Беговые дорожки', name: 'TRUE Alpine Runner', desc: 'Наклонная беговая дорожка', icon: '⛰️', price: 'от $12,000' },
]

const Poduct = () => {
  const [activeCategory, setActiveCategory] = useState('Все')
  const [showAlert, setShowAlert] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filtered = activeCategory === 'Все'
    ? products
    : products.filter(p => p.cat === activeCategory)

  const handleOrder = (product) => {
    setSelectedProduct(product)
    setShowAlert(true)
  }

  return (
    <div className="poduct-page">
      {showAlert && (
        <AlertModal
          message={`"${selectedProduct?.name}" бўйича аризангиз қабул қилинди! Биз тез орада нарх ва шартлар ҳақида сиз билан боғланамиз.`}
          onClose={() => setShowAlert(false)}
        />
      )}

      {/* HERO */}
      <section className="poduct-hero">
        <div className="container">
          <h1>ПРОДУКЦИЯ TRUE FITNESS</h1>
          <p>Профессиональное оборудование для фитнес-клубов</p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="poduct-filter">
        <div className="container">
          <div className="filter-btns">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="poduct-grid-section">
        <div className="container">
          <div className="poduct-grid">
            {filtered.map((item, i) => (
              <div className="product-card" key={i}>
                <div className="product-img">
                  <div className="img-placeholder" style={{height: '220px', background: '#f0f8ff', fontSize: '48px'}}>
                    {item.icon}
                  </div>
                  <div className="product-cat">{item.cat}</div>
                </div>
                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <div className="product-footer">
                    <span className="product-price">{item.price}</span>
                    <button className="btn-blue" onClick={() => handleOrder(item)}>Заказать</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Poduct
