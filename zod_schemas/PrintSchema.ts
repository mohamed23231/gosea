import { z, ZodType } from "zod";
import { PringInputInterFace } from "@app_types/interfaces/forms_schemas/PringInputInterFace";

const PrintSchemaObj = z.object({
  barcode: z.string(),
});
const PrintSchema: ZodType<PringInputInterFace> = PrintSchemaObj;

export { PrintSchema };
