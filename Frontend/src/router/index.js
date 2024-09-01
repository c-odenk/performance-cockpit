import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/View-Login.vue'
import Employees from '../views/View-Employees.vue'
import Employee from '../views/View-Employee.vue'
import PerformanceRecord from '../views/View-PerformanceRecord.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/employees/:id',
    name: 'Employee',
    component: Employee
  },
  {
    path: '/performancerecord/:id',
    name: 'PerformanceRecord',
    component: PerformanceRecord
  },
]

const router = new VueRouter({
  routes
})

export default router
