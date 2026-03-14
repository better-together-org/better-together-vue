import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export function setupProgress(router, axiosInstance) {
  router.beforeEach(() => NProgress.start())
  router.afterEach(() => NProgress.done())
  if (axiosInstance) {
    axiosInstance.interceptors.request.use((config) => { NProgress.start(); return config })
    axiosInstance.interceptors.response.use(
      (res) => { NProgress.done(); return res },
      (err) => { NProgress.done(); return Promise.reject(err) },
    )
  }
}
