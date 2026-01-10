CREATE TYPE "public"."status" AS ENUM('Active', 'Inactive');--> statement-breakpoint
ALTER TYPE "public"."archetype" ADD VALUE 'unknown';--> statement-breakpoint
ALTER TABLE "players" ADD COLUMN "status" "status" DEFAULT 'Active';