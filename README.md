# Axios Fetching with TypeScript

This implementation uses a centralized Axios instance with a request interceptor to automatically attach the authentication token from localStorage to outgoing requests. Authentication logic is separated into service functions, and request/response data is typed using TypeScript interfaces.

The access token returned by the DummyJSON login endpoint is stored in localStorage and removed during logout. Since DummyJSON does not provide a logout endpoint, logging out simply consists of deleting the stored token Part in DevTools (chrome)) (Application.

AxiosError is used for type-safe error handling, allowing HTTP status codes such as 400 or 401 to be checked safely.
