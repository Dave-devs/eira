'use client'

import React, { FormEvent } from 'react'

export default function NewsLetterBox() {
    const submitHandler = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <section className='text-center' data-testid="newsletter-section">
            <p className='text-2xl font-medium text-gray-500 dark:text-gray-50' data-testid="newsletter-title">
                Subscribe now & get 20% off
            </p>
            <p className='text-gray-400 mt-3' data-testid="newsletter-subtitle">
                Subscribe now and enjoy an exclusive 20% off your purchase!
            </p>
            <form
                onSubmit={submitHandler}
                className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
                data-testid="newsletter-form"
            >
                <input
                    type="email"
                    className='w-full sm:flex-1 outline-none bg-transparent'
                    placeholder='Enter your email'
                    required
                    data-testid="newsletter-input"
                />
                <button
                    type='submit'
                    className='bg-primary text-white text-xs px-10 py-4'
                    data-testid="newsletter-submit"
                >
                    SUBSCRIBE
                </button>
            </form>
        </section>
    )
}
