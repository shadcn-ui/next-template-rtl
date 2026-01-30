"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BluetoothIcon, PlusSignIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export function ExampleCardHebrew() {
  return (

    <Card className="relative w-full max-w-sm overflow-hidden pt-0">
      <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Photo by mymind on Unsplash"
        title="Photo by mymind on Unsplash"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
      />
      <CardHeader>
        <CardTitle>Observability Plus מחליף את Monitoring</CardTitle>
        <CardDescription>
          עבור לדרך המשופרת לחקור את הנתונים שלך, עם שפה טבעית. Monitoring לא יהיה זמין עוד בתוכנית Pro בנובמבר 2025
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <AlertDialog>
          <AlertDialogTrigger render={<Button />}>
            <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} data-icon="inline-start" />
            הצג דיאלוג
          </AlertDialogTrigger>
          <AlertDialogContent size="sm" dir="rtl">
            <AlertDialogHeader>
              <AlertDialogMedia>
                <HugeiconsIcon icon={BluetoothIcon} strokeWidth={2} />
              </AlertDialogMedia>
              <AlertDialogTitle>לאפשר להתקן להתחבר?</AlertDialogTitle>
              <AlertDialogDescription>
                האם אתה רוצה לאפשר להתקן USB להתחבר למכשיר זה?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>אל תאפשר</AlertDialogCancel>
              <AlertDialogAction>אפשר</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Badge variant="secondary" className="ms-auto">
          אזהרה
        </Badge>
      </CardFooter>
    </Card>
  )
}
