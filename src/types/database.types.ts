export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      legs: {
        Row: {
          date: string | null
          exercise: string
          id: number
          set1: string | null
          set2: string | null
          set3: string | null
        }
        Insert: {
          date?: string | null
          exercise: string
          id?: number
          set1?: string | null
          set2?: string | null
          set3?: string | null
        }
        Update: {
          date?: string | null
          exercise?: string
          id?: number
          set1?: string | null
          set2?: string | null
          set3?: string | null
        }
      }
      pull: {
        Row: {
          date: string | null
          exercise: string | null
          id: number
          set1: string | null
          set2: string | null
          set3: string | null
        }
        Insert: {
          date?: string | null
          exercise?: string | null
          id?: number
          set1?: string | null
          set2?: string | null
          set3?: string | null
        }
        Update: {
          date?: string | null
          exercise?: string | null
          id?: number
          set1?: string | null
          set2?: string | null
          set3?: string | null
        }
      }
      push: {
        Row: {
          date: string | null
          exercise: string | null
          id: number
          set1: string | null
          set2: string | null
          set3: string | null
        }
        Insert: {
          date?: string | null
          exercise?: string | null
          id?: number
          set1?: string | null
          set2?: string | null
          set3?: string | null
        }
        Update: {
          date?: string | null
          exercise?: string | null
          id?: number
          set1?: string | null
          set2?: string | null
          set3?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
