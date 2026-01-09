CREATE TABLE "trades" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"from_team_id" uuid NOT NULL,
	"to_team_id" uuid NOT NULL,
	"outgoing_player_ids" jsonb NOT NULL,
	"incoming_player_ids" jsonb NOT NULL,
	"outgoing_salary" integer NOT NULL,
	"incoming_salary" integer NOT NULL,
	"status" varchar(24) DEFAULT 'processed' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "players" RENAME COLUMN "name" TO "first_name";--> statement-breakpoint
ALTER TABLE "players" ALTER COLUMN "archetype" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "rosters" ALTER COLUMN "contract_years" SET DEFAULT 1;--> statement-breakpoint
ALTER TABLE "rosters" ALTER COLUMN "contract_years" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "rosters" ALTER COLUMN "salary" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "rosters" ALTER COLUMN "salary" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "players" ADD COLUMN "player_id" uuid;--> statement-breakpoint
ALTER TABLE "players" ADD COLUMN "last_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "players" ADD COLUMN "salary" integer;--> statement-breakpoint
ALTER TABLE "teams" ADD COLUMN "salary_cap" integer DEFAULT 136000000 NOT NULL;--> statement-breakpoint
ALTER TABLE "teams" ADD COLUMN "hard_cap_active" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "trades" ADD CONSTRAINT "trades_from_team_id_teams_id_fk" FOREIGN KEY ("from_team_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trades" ADD CONSTRAINT "trades_to_team_id_teams_id_fk" FOREIGN KEY ("to_team_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_trades_from_team" ON "trades" USING btree ("from_team_id");--> statement-breakpoint
CREATE INDEX "idx_trades_to_team" ON "trades" USING btree ("to_team_id");