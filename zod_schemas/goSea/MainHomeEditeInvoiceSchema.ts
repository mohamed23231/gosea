import { MainHomeEditeInvoice } from "@app_types/interfaces/forms_schemas/goSea/MainHomeEditeInvoice";
import { z, ZodType } from "zod";

const MainHomeEditeInvoiceSchemaObject = {
  barecode: z.string(),
  boatType: z.string(),
  boat: z.string(),
};

const MainHomeEditeInvoiceSchema: ZodType<MainHomeEditeInvoice> = z.object(
  MainHomeEditeInvoiceSchemaObject
);

export { MainHomeEditeInvoiceSchema };
