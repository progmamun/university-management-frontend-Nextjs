import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Pokemon } from "./types";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: ["user"],
});
