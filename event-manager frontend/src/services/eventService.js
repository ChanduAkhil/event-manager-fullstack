// src/services/eventService.js
import { mockEvents } from "./mockData";

const fakeApiCall = (data, delay = 500) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });

export const getAllEvents = async () => {
  return fakeApiCall(mockEvents);
};

export const getEventById = async (id) => {
  const event = mockEvents.find((e) => e.id === parseInt(id));
  return fakeApiCall(event);
};

export const createEvent = async (eventData) => {
  const newEvent = {
    id: mockEvents.length + 1, // Simple ID generation
    ...eventData,
    imagePath: `https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600`, // Generic image
  };
  mockEvents.push(newEvent);
  return fakeApiCall(newEvent);
};