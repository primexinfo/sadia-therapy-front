import { api, BASE_URL } from "./api";
import axios from "axios";
let token = JSON.parse(localStorage.getItem("token"));

const configParams = {
  "Content-Type": "application/json",
};


const userInfoConfigParams = {
  "Content-Type": "application/x-www-form-urlencoded",
  Authorization: `Bearer ${token}`,
};

export const GET_BLOG_CATEGORIES = () => {
  return axios.get(`${BASE_URL}/categories`);
};

export const GET_FRONT_BLOGS = () => {
	return axios.get(`${BASE_URL}/front-blogs`);
}

export const GET_ALL_BLOG = (pageNumber) => {
	return axios.get(`${BASE_URL}/all-blogs?page=${pageNumber}`);
}