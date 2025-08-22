import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
	// action declarations
	// define action then validate input parameters with Zod schema
	getGreeting: defineAction({
		input: z.object({
			name: z.string(),
		}),
		// backend logic to run on the server
		handler: async (input) => { 
			return `Hello, ${input.name}!`;
		},
	}),
};
