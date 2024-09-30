export interface ICreateCourse {
  name: string
  description: string
  price: number
  weekDays: ISelectOptions[]
  duration: number
  startClass: string
  endClass: string
}

export interface ICreateCourseResponse {
  _id: string
  name: string
  description: string
  price: number
  weekDays: string[]
  duration: number
  startClass: string
  endClass: string
  students?: any[]
}

interface ISelectOptions {
  value: string
  label: string
}
