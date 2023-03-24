/*
  Warnings:

  - You are about to alter the column `renavam` on the `Cars` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cars" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ano" INTEGER NOT NULL,
    "marca" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "chassi" TEXT NOT NULL,
    "renavam" BIGINT NOT NULL
);
INSERT INTO "new_Cars" ("ano", "chassi", "id", "marca", "modelo", "placa", "renavam") SELECT "ano", "chassi", "id", "marca", "modelo", "placa", "renavam" FROM "Cars";
DROP TABLE "Cars";
ALTER TABLE "new_Cars" RENAME TO "Cars";
CREATE UNIQUE INDEX "Cars_placa_key" ON "Cars"("placa");
CREATE UNIQUE INDEX "Cars_chassi_key" ON "Cars"("chassi");
CREATE UNIQUE INDEX "Cars_renavam_key" ON "Cars"("renavam");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
