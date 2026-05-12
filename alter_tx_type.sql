ALTER TABLE transactions DROP CONSTRAINT transactions_type_check;
ALTER TABLE transactions ADD CONSTRAINT transactions_type_check CHECK (type::text = ANY (ARRAY['TOP_UP'::character varying, 'WITHDRAW'::character varying, 'PAYMENT'::character varying, 'EARNING'::character varying, 'REFUND'::character varying, 'BONUS'::character varying, 'FEE'::character varying]::text[]));
