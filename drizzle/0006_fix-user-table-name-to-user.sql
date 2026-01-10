ALTER TABLE "User" RENAME TO "user";--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "User_email_unique";--> statement-breakpoint
ALTER TABLE "teams" DROP CONSTRAINT "teams_owner_user_id_User_id_fk";
--> statement-breakpoint
ALTER TABLE "teams" ADD CONSTRAINT "teams_owner_user_id_user_id_fk" FOREIGN KEY ("owner_user_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");