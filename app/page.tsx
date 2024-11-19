"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";



export default function Home() {
  const { toast } = useToast();
  return (
    <>
      <header className="h-16 bg-gray-800 text-white flex items-center px-6 shadow-lg">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <nav className="ml-auto">
          <ul className="flex space-x-6 items-center">
            <li>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-black border-white hover:bg-gray-700"
                  >
                    Add User
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] rounded-lg bg-gray-50">
                  <DialogHeader>
                    <DialogTitle className="text-gray-800">
                      Add User
                    </DialogTitle>
                    <DialogDescription className="text-sm text-gray-600">
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label
                        htmlFor="name"
                        className="text-right text-gray-700"
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3 border-gray-300 focus:ring-gray-500"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label
                        htmlFor="username"
                        className="text-right text-gray-700"
                      >
                        Username
                      </Label>
                      <Input
                        id="username"
                        defaultValue="@peduarte"
                        className="col-span-3 border-gray-300 focus:ring-gray-500"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      type="submit"
                      className="bg-gray-800 hover:bg-gray-900 text-white"
                    >
                      Save Changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </li>
            <li>
              <Button
              className="text-black border-white hover:bg-gray-700"
                variant="outline"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                    action: (
                      <ToastAction altText="Try again">Try again</ToastAction>
                    ),
                  });
                }}
              >
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 bg-gray-100">
        <div className="container mx-auto py-6 px-4">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-gray-600 text-lg font-medium">
                  Total Users
                </h2>
                <p className="text-gray-900 text-4xl font-bold mt-2">100</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
