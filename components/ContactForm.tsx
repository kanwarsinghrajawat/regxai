'use client'

import React from 'react'
import { useFormReducer } from './hooks/useFormReducer'
import { validateForm } from './hooks/useFormValidation'
import { sendEmail } from './hooks/useSendEmail'

export default function ContactForm() {
  const [state, dispatch] = useFormReducer()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    dispatch({
      type: 'SET_FORM_DATA',
      payload: { [name]: value },
    })
    
    // Clear error when user types
    if (state.errors[name as keyof typeof state.errors]) {
      dispatch({
        type: 'SET_ERRORS',
        payload: { [name]: '' },
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const errors = validateForm(state.formData)
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', payload: errors })
      return
    }

    dispatch({ type: 'SET_IS_SUBMITTING', payload: true })
    dispatch({ type: 'SET_API_MESSAGE', payload: null })

    try {
      const result = await sendEmail(state.formData)
      
      if (result.success) {
        dispatch({ type: 'SET_API_MESSAGE', payload: { type: 'success', text: result.message } })
        dispatch({ type: 'RESET_FORM' })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          dispatch({ type: 'SET_API_MESSAGE', payload: null })
        }, 5000)
      } else {
        dispatch({ type: 'SET_API_MESSAGE', payload: { type: 'error', text: result.message } })
      }
    } catch (error) {
      dispatch({
        type: 'SET_API_MESSAGE',
        payload: {
          type: 'error',
          text: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        },
      })
    } finally {
      dispatch({ type: 'SET_IS_SUBMITTING', payload: false })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nameAndCompany" className="block text-sm font-semibold mb-2 text-slate-900 dark:text-slate-100">
          Name & Company *
        </label>
        <input
          type="text"
          id="nameAndCompany"
          name="nameAndCompany"
          required
          value={state.formData.nameAndCompany}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent dark:focus:ring-accent-green focus:border-accent dark:focus:border-accent-green outline-none transition-all bg-white dark:bg-black dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 border-slate-200"
          placeholder="John Doe, Company Name"
        />
        {state.errors.nameAndCompany && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.errors.nameAndCompany}</p>
        )}
      </div>

      <div>
        <label htmlFor="emailOrTelegram" className="block text-sm font-semibold mb-2 text-slate-900 dark:text-slate-100">
          Email or Telegram *
        </label>
        <input
          type="text"
          id="emailOrTelegram"
          name="emailOrTelegram"
          required
          value={state.formData.emailOrTelegram}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent dark:focus:ring-accent-green focus:border-accent dark:focus:border-accent-green outline-none transition-all bg-white dark:bg-black dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 border-slate-200"
          placeholder="john@company.com or @username"
        />
        {state.errors.emailOrTelegram && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.errors.emailOrTelegram}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-semibold mb-2 text-slate-900 dark:text-slate-100">
          Message *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={6}
          value={state.formData.description}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent dark:focus:ring-accent-green focus:border-accent dark:focus:border-accent-green outline-none transition-all bg-white dark:bg-black dark:border-slate-800 text-slate-900 dark:text-slate-100 resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500 border-slate-200"
          placeholder="Please provide details about your inquiry..."
        />
        {state.errors.description && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.errors.description}</p>
        )}
      </div>

      {state.apiMessage && (
        <div
          className={`p-4 rounded-lg border ${
            state.apiMessage.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800'
          }`}
        >
          <p
            className={`text-sm ${
              state.apiMessage.type === 'success' 
                ? 'text-green-800 dark:text-green-200' 
                : 'text-red-800 dark:text-red-200'
            }`}
          >
            {state.apiMessage.text}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={state.isSubmitting}
        className="w-full md:w-auto px-8 py-3 bg-accent dark:bg-accent-green text-white font-semibold rounded-lg hover:bg-accent-dark dark:hover:bg-accent-green-dark transition-all focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-green focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        {state.isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
