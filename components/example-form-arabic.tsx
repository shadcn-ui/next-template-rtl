"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const countries = [
  { value: "saudi", label: "السعودية" },
  { value: "uae", label: "الإمارات العربية المتحدة" },
  { value: "egypt", label: "مصر" },
  { value: "jordan", label: "الأردن" },
  { value: "lebanon", label: "لبنان" },
] as const

export function ExampleFormArabic() {
  return (

    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>معلومات المستخدم</CardTitle>
        <CardDescription>يرجى ملء التفاصيل أدناه</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="arabic-form-name">الاسم</FieldLabel>
              <Input
                id="arabic-form-name"
                placeholder="أدخل اسمك"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="arabic-form-country">
                البلد
              </FieldLabel>
              <Combobox items={countries}>
                <ComboboxInput
                  id="arabic-form-country"
                  placeholder="اختر بلدًا"
                  required
                />
                <ComboboxContent align="start" alignOffset={0} sideOffset={8} data-lang="ar" dir="rtl">
                  <ComboboxEmpty>لم يتم العثور على بلدان.</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (
                      <ComboboxItem key={item.value} value={item}>
                        {item.label}
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </Field>
            <Field>
              <FieldLabel htmlFor="arabic-form-comments">تعليقات</FieldLabel>
              <Textarea
                id="arabic-form-comments"
                placeholder="أضف أي تعليقات إضافية"
                className="resize-none"
              />
            </Field>
            <Field orientation="horizontal">
              <Button type="submit">إرسال</Button>
              <Button variant="outline" type="button">
                إلغاء
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
