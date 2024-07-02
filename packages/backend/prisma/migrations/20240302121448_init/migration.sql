-- CreateTable
CREATE TABLE "User" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "isVerified" BOOLEAN
  "isActivated" BOOLEAN
  "verificationToken" TEXT NOT NULL,
  "activationToken" TEXT NOT NULL,
  "todos" Todo[]

  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Todo" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "userName" TEXT,
  "title" TEXT NOT NULL,
  "text" TEXT NOT NULL,
  "isCompleted" BOOLEAN,
  "isPprivate" BOOLEAN,

  CONSTRAINT "Todo_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
