"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <Card className="w-full max-w-md" dir="rtl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold">مرحباً بعودتك</CardTitle>
        <CardDescription>
          أدخل بيانات الاعتماد الخاصة بك للوصول إلى حسابك
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">كلمة المرور</Label>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                نسيت كلمة المرور؟
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 bg-transparent border-t-0 pt-2">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            {"ليس لديك حساب؟ "}
            <a
              href="#"
              className="text-foreground font-medium hover:underline"
            >
              إنشاء حساب
            </a>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}
