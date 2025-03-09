ALTER TABLE "users" DROP CONSTRAINT "users_salt_unique";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "salt";