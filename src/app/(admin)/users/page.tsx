"use client";

import {
  useMemo,
  useState,
} from "react";

import usersData from "@/data/admin-users.json";

import {
  Badge,
} from "@/components/ui/badge";

import {
  Button,
} from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Input,
} from "@/components/ui/input";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import {
  Eye,
  Shield,
  UserPlus,
  Ban,
} from "lucide-react";

type User = {
  id: number;
  username: string;
  role: string;
  lastLogin: string;
  predictions: number;
  status: string;
};

export default function UsersPage() {

  const [search, setSearch] =
    useState("");

  const [roleFilter, setRoleFilter] =
    useState("all");

  const [statusFilter, setStatusFilter] =
    useState("all");

  const filteredUsers =
    useMemo(() => {

      return usersData.filter(
        (user) => {

          const matchesSearch =
            user.username
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesRole =
            roleFilter ===
              "all" ||
            user.role ===
              roleFilter;

          const matchesStatus =
            statusFilter ===
              "all" ||
            user.status ===
              statusFilter;

          return (
            matchesSearch &&
            matchesRole &&
            matchesStatus
          );
        }
      );

    }, [
      search,
      roleFilter,
      statusFilter,
    ]);

  function suspendUser(
    username: string
  ) {

    alert(
      `${username} suspended`
    );
  }

  function changeRole(
    username: string
  ) {

    alert(
      `Role changed for ${username}`
    );
  }

  function viewDetails(
    username: string
  ) {

    alert(
      `Viewing ${username}`
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <h1 className="text-5xl font-black">

              User Management

            </h1>

            <Badge variant="secondary">

              DEMO DATA

            </Badge>

          </div>

          <p className="mt-3 text-muted-foreground">

            Manage platform users,
            permissions, and
            account status.

          </p>

        </div>

        <Button>

          <UserPlus className="mr-2 h-4 w-4" />

          Add User

        </Button>

      </div>

      {/* Filters */}
      <Card className="border-border bg-background/80">

        <CardContent className="grid gap-4 p-6 md:grid-cols-3">

          <Input
            placeholder="Search username..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <Select
            onValueChange={
              setRoleFilter
            }
          >

            <SelectTrigger>

              <SelectValue placeholder="Filter role" />

            </SelectTrigger>

            <SelectContent>

              <SelectItem value="all">

                All Roles

              </SelectItem>

              <SelectItem value="Admin">

                Admin

              </SelectItem>

              <SelectItem value="Researcher">

                Researcher

              </SelectItem>

              <SelectItem value="Viewer">

                Viewer

              </SelectItem>

            </SelectContent>

          </Select>

          <Select
            onValueChange={
              setStatusFilter
            }
          >

            <SelectTrigger>

              <SelectValue placeholder="Filter status" />

            </SelectTrigger>

            <SelectContent>

              <SelectItem value="all">

                All Status

              </SelectItem>

              <SelectItem value="Active">

                Active

              </SelectItem>

              <SelectItem value="Suspended">

                Suspended

              </SelectItem>

            </SelectContent>

          </Select>

        </CardContent>

      </Card>

      {/* Table */}
      <Card className="border-border bg-background/80">

        <CardContent className="overflow-auto p-6">

          <table className="w-full border-collapse">

            <thead>

              <tr className="border-b border-border">

                <th className="p-4 text-left">

                  Username

                </th>

                <th className="p-4 text-left">

                  Role

                </th>

                <th className="p-4 text-left">

                  Last Login

                </th>

                <th className="p-4 text-left">

                  Predictions

                </th>

                <th className="p-4 text-left">

                  Status

                </th>

                <th className="p-4 text-left">

                  Actions

                </th>

              </tr>

            </thead>

            <tbody>

              {filteredUsers.map(
                (user) => (

                  <tr
                    key={user.id}
                    className="border-b border-border"
                  >

                    <td className="p-4 font-medium">

                      {
                        user.username
                      }

                    </td>

                    <td className="p-4">

                      {
                        user.role
                      }

                    </td>

                    <td className="p-4">

                      {
                        user.lastLogin
                      }

                    </td>

                    <td className="p-4">

                      {
                        user.predictions
                      }

                    </td>

                    <td className="p-4">

                      <Badge
                        variant={
                          user.status ===
                          "Active"
                            ? "default"
                            : "destructive"
                        }
                      >

                        {
                          user.status
                        }

                      </Badge>

                    </td>

                    <td className="flex flex-wrap gap-2 p-4">

                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() =>
                          viewDetails(
                            user.username
                          )
                        }
                      >

                        <Eye className="h-4 w-4" />

                      </Button>

                      <Button
                        size="sm"
                        onClick={() =>
                          changeRole(
                            user.username
                          )
                        }
                      >

                        <Shield className="h-4 w-4" />

                      </Button>

                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() =>
                          suspendUser(
                            user.username
                          )
                        }
                      >

                        <Ban className="h-4 w-4" />

                      </Button>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </CardContent>

      </Card>

    </div>
  );
}