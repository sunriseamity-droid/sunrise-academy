import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cvsrabcfmzpusbuwiqqn.supabase.co";
const supabasePublishableKey = "sb_publishable_eYsuFrxwgzrMyZMcCzSq_Q_FLbokcjt";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);