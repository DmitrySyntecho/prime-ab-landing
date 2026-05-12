'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import {
  X,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ChevronRight,
} from 'lucide-react'

export function CartPanel() {
  const { items, removeItem, updateQuantity } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity * item.rentalDays, 0)
  const delivery = items.reduce((sum, item) => sum + item.product.deliveryFee, 0)
  const installation = items.reduce((sum, item) => sum + item.product.installationFee, 0)
  const total = subtotal + delivery + installation

  // Format price consistently
  function formatPrice(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating trigger button */}
      {items.length > 0 && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 rounded-full text-white font-bold transition-all hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)',
            boxShadow: '0 8px 24px rgba(255, 45, 111, 0.4)',
          }}
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-white text-red-600 text-xs font-bold">
              {items.length}
            </span>
          </div>
        </button>
      )}

      {/* Slide-out panel */}
      <div
        className="fixed right-0 top-0 h-screen w-full sm:w-96 bg-background z-40 shadow-2xl transition-transform duration-300 overflow-y-auto flex flex-col"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white/70" />
          </button>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <p className="text-white/50 text-center py-8">No items in cart</p>
          ) : (
            items.map((item) => {
              const itemTotal = item.product.price * item.quantity * item.rentalDays
              return (
                <div
                  key={item.id}
                  className="p-4 rounded-xl transition-all"
                  style={{
                    background: 'rgba(255,45,111,0.05)',
                    border: '1px solid rgba(255,45,111,0.15)',
                  }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-sm">{item.product.name}</h3>
                      <p className="text-xs text-white/50 mt-1">
                        ${formatPrice(item.product.price)} × {item.quantity} × {item.rentalDays}d
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 hover:bg-red-600/20 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                      >
                        <Minus className="w-3 h-3 text-white/70" />
                      </button>
                      <span className="text-white/70 text-xs font-medium min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                      >
                        <Plus className="w-3 h-3 text-white/70" />
                      </button>
                    </div>
                    <span className="font-bold text-white text-sm">
                      ${formatPrice(itemTotal)}
                    </span>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Footer with totals and CTA */}
        {items.length > 0 && (
          <div className="border-t border-white/10 p-6 space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-white/70">
                <span>Subtotal</span>
                <span>${formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Delivery</span>
                <span>${formatPrice(delivery)}</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Setup/Installation</span>
                <span>${formatPrice(installation)}</span>
              </div>
            </div>

            <div
              className="pt-4 border-t border-white/10"
              style={{ borderColor: 'rgba(255,45,111,0.2)' }}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-white">Total</span>
                <span className="text-2xl font-black text-white">
                  ${formatPrice(total)}
                </span>
              </div>

              <Link
                href="/shop/cart"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold transition-all hover:gap-3"
                style={{
                  background: 'linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)',
                  boxShadow: '0 8px 20px rgba(255,45,111,0.4)',
                }}
                onClick={() => setIsOpen(false)}
              >
                Proceed to Checkout
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
