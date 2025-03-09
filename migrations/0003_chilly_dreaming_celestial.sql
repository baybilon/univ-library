ALTER TABLE "users" ALTER COLUMN "password" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "salt" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_salt_unique" UNIQUE("salt");