import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient()

export const defaultStaleTime = 1000 * 60 * 5 // 5 minutes

export enum QueryKeys {
    createCourse = 'createCourse',
    getCourse = 'getCourse',
    getCourses = 'getCourses',
    updateCourse = 'updateCourse',
    createStudent = 'createStudent',
    getStudent = 'getStudent',
    getStudents = 'getStudents',
    updateStudent = 'updateStudent',
}