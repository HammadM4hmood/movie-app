/** Christopher Findlay, Hammad Mahmood, Samuel Kyle Yung, Gurnoor Singh | April 1st, 2025
 * Assignment 3 - Full-Stack Web Application
 * 
 * This module initializes and exports a Prisma Client instance for database interactions.
 * It leverages the global scope to prevent the creation of multiple Prisma Client instances
 * during development, which can lead to connection issues and increased resource consumption.
 * In non-production environments, the Prisma Client is attached to the global `prisma` variable
 * for potential reuse across different modules without instantiating new clients repeatedly.
 */

import { PrismaClient } from "@prisma/client";

const client = globalThis.PrismaClient || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;