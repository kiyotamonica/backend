import { FastifyRequest, FastifyReply } from "fastify";
import fs from "fs"; // Usaremos fs.promises
import path from "path";
import { randomUUID } from "crypto";

class UploadPetImageController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const fileData = (request.body as any)?.file;

      if (!fileData) {
        console.error("Falha ao encontrar o campo 'file' no request.body.");
        return reply.status(400).send({ message: "Nenhum arquivo 'file' enviado." });
      }

      // data é o objeto do arquivo
      const data = Array.isArray(fileData) ? fileData[0] : fileData;

      // 4. Validação do tipo de arquivo
      const allowedMimeTypes = [
        'image/jpeg', 
        'image/png', 
        'image/gif', 
        'application/octet-stream'
      ];

      if (!allowedMimeTypes.includes(data.mimetype!)) {
        console.error(`Tipo de arquivo não permitido: ${data.mimetype}`);
        return reply.status(400).send({ message: `Tipo de arquivo não permitido: ${data.mimetype}.` });
      }

      // 5. Salvar o arquivo
      const fileExtension = path.extname(data.filename) || '.jpg';
      const fileName = `${randomUUID()}${fileExtension}`;
      
      // --- ESTA É A CORREÇÃO DO CAMINHO ---
      // Voltamos 3 níveis (Pet -> controllers -> src -> backend)
      const uploadPath = path.resolve(__dirname, '..', '..', '..', 'uploads', fileName);
      // ------------------------------------

      // Usamos o método .toBuffer() que vimos nos logs
      await fs.promises.writeFile(uploadPath, await data.toBuffer());

      // 6. Retornar a URL de acesso à imagem
      const fileUrl = `${request.protocol}://${request.hostname}/uploads/${fileName}`;

      return reply.status(200).send({ url: fileUrl });

    } catch (error) {
      console.error("Erro no upload da imagem:", error);
      return reply.status(500).send({ message: "Falha ao processar a imagem." });
    }
  }
}

export { UploadPetImageController }